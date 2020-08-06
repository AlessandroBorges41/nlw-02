import { Request, Response } from "express";
import db from "../database/connection";
import convertHoursToMinutes from "../utils/convertHoursToMinutes";

interface IScheduleItem{
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {
    async index(request: Request, response: Response){
        const filters = request.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;
        

         if(!filters.week_day || !filters.subject || !filters.time ){
             return response.status(400).json({
                 error: 'Missing filter to search classes'
             });
         }

         const timeInMinutes = convertHoursToMinutes(time);

         const classes = await db('classes')
            .whereExists(function(){
                this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)]) 
                .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return response.json(classes);
  
    }

  
    async create(request: Request, response: Response) {
  
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;
  
     const trasactionDb = await db.transaction();

   try {
            /* Ao inserir um usuário ou vários usuários o comando de insert retorna uma lista de id(s),
            assim armazenamos essa lista dentro da constante insertUserIds 
            */
            const insertUsersIds = await trasactionDb('users').insert({
                name, avatar, whatsapp, bio,
            });

            /* Lendo a primeira posição da lista que é um array de id */
            const user_id = insertUsersIds[0];
        
            const insertClassesIds = await trasactionDb('classes').insert({
                subject,
                cost,
                user_id
            });

            const class_id = insertClassesIds[0];

            /* Pecorrendo o Schedule para converter o campos from e to para minutos */
            const classSchedule = schedule.map((scheduleItem: IScheduleItem) => {
                return {
                    week_day: scheduleItem.week_day,
                    from: convertHoursToMinutes(scheduleItem.from),
                    to: convertHoursToMinutes(scheduleItem.to),
                    class_id
                };
            });

            await trasactionDb('class_schedule').insert(classSchedule);

            await trasactionDb.commit();

            return response.status(201).send();
   } 
    catch (err) {
       
        await trasactionDb.rollback();
        return response.status(400).json({
            error: 'Unexpected error while creating new class'
        });
   }
   

}};