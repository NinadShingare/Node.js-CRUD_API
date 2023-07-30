import fetch from 'node-fetch';
import mongoose from 'mongoose';

// mongoose.connect("mongodb://127.0.0.1:27017/tycs", { useNewUrlParser: true });

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://abc:Srm%402023@cluster0.apa6xjc.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });

const postSchema = new mongoose.Schema({
    user_id:{
        type:Number,
        required:true
    },
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
});

const Post = mongoose.model('Post',postSchema);
async function getPosts(){

    //const api_url =`https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
    //const response1 = await fetch(api_url);
    //const json = await response1.json();
    //const response = await response1.json();
    
    const myPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await myPosts.json();
    //console.log(response);
    for(let i=0;i< response.length;i++){
        // console.log(response[i]['id']);
        const post  = new Post({
            user_id:response[i]['userId'],
            id:response[i]['id'],
            title:response[i]['title'],
            description:response[i]['body'],

        });
        post.save();

        //console.log(response[i]['body']);
    }
}

getPosts();
//nodemon fetchimport.js