import React , {useState, useEffect} from 'react';
import Dexie from "dexie";

const Main = ({title, location, selectedCategory, selectedDay,selectedSlot}) => {
    
    //set the database 
    const db = new Dexie("ReactDexie");
    //create the database store
    db.version(1).stores({
        slots: "title, location, Category, dayid, slotid"
    })
    db.open().catch((err) => {
        console.log(err.stack || err)
    })
    
    //set the state and property
    /*const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [selectedDay, setSelectedDay] = useState('')
    const [selectedSlot, setSelectedSlot] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')*/
    const [slots, setSlots] = useState("");

    
  
    const deleteSlot = async(id) => {
        console.log(id);
        db.slots.delete(id);
        let allSlots = await db.slots.toArray();
        //set the posts
        setSlots(allSlots);
    }


    //submit 
    const getSlotInfo = (e) => {
        e.preventDefault();
        if(title !== "" && selectedDay !== "" && selectedSlot !== "" && selectedCategory !== ""){
            let slot = {
                title: title,
                location: location,
                selectedCategory: selectedCategory,
                selectedDay: selectedDay,
                selectedSlot: selectedSlot  
            }
           
    
            db.slots.add(slot).then(async() => {
                //retrieve all posts inside the database
                let allSlots = await db.slots.toArray();
                //set the posts
                setSlots(allSlots);
            });
            
        }
        
        
    }
// get all post at all time 
    useEffect(() => {

        //get all posts from the database
        const getSlots = async() => {
            let allSlots = await db.slots.toArray();
            setSlots(allSlots);
        }
        getSlots();
  
    }, [])



    /*let postData;
  
  
    if(posts.length > 0) {
      
        postData = <div className="postsContainer">
                    {
                        posts.map(post => {
                         
                             return <div className="post" key={post.title}>
                                        <div style={{backgroundImage: "url(" + post.file + ")" }} />
                                            <h2>{post.title}</h2>
                                            <p>{post.content}</p>
                                            <button className="delete" onClick={() => deletePost(post.title)}>Delete</button>
                                        </div>       
                        })
                    }
                   </div>
    }else{
        postData = <div className="message">
                     <p>There are no posts to show</p>
                   </div>
    }*/

    return (
    <React.Fragment>
     
     
      
    </React.Fragment>
  );
}

export default Main