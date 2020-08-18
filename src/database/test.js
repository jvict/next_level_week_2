const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "11973990588",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já  passaram por uma das minhas explosões."
    }

    classValue = {
        subject: 1,
        cost: "20",
        //o proffy id virá pelo banco de dados

    }

    classScheduleValues = [

        //class_id virá pelo banco de, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

   
    //await createProffy(db,{proffyValue,classValue,classScheduleValues})
    //cosultar dados

    //todos os proffys
    const seletedProfys = await db.all("SELECT * FROM proffys")
    //console.log(seletedProfys)

    //consultar as classes de um determinado professor e trazer junto os dados dele
    const seletClassesAndProffys = await db.all(`
        SELECT classes.*,proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    //console.log(seletClassesAndProffys)
    
    //hoario que pessoa trabalha das time_from = 8h até time_to = 18h
    const selectClassesSchedule = await db.all(`
        SELECT classes_schedule.* 
        FROM classes_schedule
        WHERE classes_schedule.class_id = "1"
        AND classes_schedule.weekday = "0"
        AND classes_schedule.time_from <= "1330"
        AND classes_schedule.time_to > "1330"
         
        
    `)

    //console.log(selectClassesSchedule);
})