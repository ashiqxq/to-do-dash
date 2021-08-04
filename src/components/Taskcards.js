import React, { Component } from 'react'
import { TaskContext } from '../App'
import styles from '../styles/Taskcards.module.css'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'




const tasks_data = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 2,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 3,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 2,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 3,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      "userId": 1,
      "id": 7,
      "title": "magnam facilis autem",
      "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      "userId": 3,
      "id": 8,
      "title": "dolorem dolore est ipsam",
      "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      "userId": 1,
      "id": 9,
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      "userId": 1,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
      "userId": 2,
      "id": 11,
      "title": "et ea vero quia laudantium autem",
      "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
      "userId": 2,
      "id": 12,
      "title": "in quibusdam tempore odit est dolorem",
      "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
      "userId": 2,
      "id": 13,
      "title": "dolorum ut in voluptas mollitia et saepe quo animi",
      "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
      "userId": 2,
      "id": 14,
      "title": "voluptatem eligendi optio",
      "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
      "userId": 2,
      "id": 15,
      "title": "eveniet quod temporibus",
      "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
      "userId": 2,
      "id": 16,
      "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
      "userId": 2,
      "id": 17,
      "title": "fugit voluptas sed molestias voluptatem provident",
      "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
    },
    {
      "userId": 2,
      "id": 18,
      "title": "voluptate et itaque vero tempora molestiae",
      "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    },
    {
      "userId": 2,
      "id": 19,
      "title": "adipisci placeat illum aut reiciendis qui",
      "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
    },
    {
      "userId": 2,
      "id": 20,
      "title": "doloribus ad provident suscipit at",
      "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
    }
]
function refractor(title){
    return title.slice()
}
const names = ["", "emmy rosum", "sara emmanuel", "Irene Smith"]
const img_urls = ["", "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
                    "https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg",
                   "https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg"]
function Taskcards() {
    const {setTaskcontext}  = useContext(TaskContext);
    const [viewingtask, setviewingtask] = useState(1);
    useEffect(() => {
        // Update the document title using the browser API
        console.log("used effect");
        handleChange({id:tasks_data[0].id, 
                       title: tasks_data[0].title,
                       body: tasks_data[0].body,
                       userId: tasks_data[0].userId
                    })()
      }, [viewingtask]);
    const handleChange = taskdata => {
        return function(){
            console.log("curry hit")
            console.log(taskdata);
            // setviewingtask(taskdata.id);
            setTaskcontext({id:taskdata.id, title: taskdata.title, body: taskdata.body, 
                            imageUrl:img_urls[taskdata.userId], username: names[taskdata.userId]});
        }
    };

    // let numbers = Array(20).fill().map((x,i)=>i)
    let tasklist = tasks_data.map((task_data)=>
        <div className={styles.Taskcard}>
            <div className={styles.taskcheck} onClick={handleChange(task_data)}>
                <div className={styles.taskcheckbox}>
                    <input type="checkbox" id={`card_${task_data.id}`} name={`card_${task_data.id}`} value={`card_${task_data.id}`} 
                    />

                    <label htmlFor={`card_${task_data.id}`}></label>
                </div>
                <div className={styles.tasktitle}>
                    <h3>
                        {refractor(task_data.title)}
                    </h3> 
                </div>
            </div>
            <div className={styles.tic}>
                <img className={styles.taskimg} src={img_urls[task_data.userId]}
                        alt="img"/>
            </div>
        </div>
                        )
        return (
            <div className={styles.Taskcardslist}>
                {tasklist}
            </div>
        )
}

export default Taskcards
