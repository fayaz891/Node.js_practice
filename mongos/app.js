const mongoose = require("mongoose");

//creation of database
mongoose.connect("mongodb://localhost:27017/fayaz123",
{useNewUrlParser:true,useUnifiedTopology:true})

.then(() => {
    console.log("succesfully done")
})

.catch((err) => {
    console.log(err)
});

//creation of document structure
const listSchema= new mongoose.Schema({
    name:"string",
    videos:"string",
    author:"string",
    mobile:Number,
    active:Boolean
})

//creation of collection
const Playlist=new mongoose.model("Playlist",listSchema);

/*
insert/create documents
const data = new Playlist({
    name: "fayaz",
    videos: "fayaz",
    author: "fayaz",
    mobile: 23,
    active: 0
});

data.save();
*/

//insert data with promises or async await function method,in async await always work with try and catch
const createDocument = async()=>{
    try {
        const data = new Playlist({
            name: "waqas",
            videos: "nothing",
            author: "fayaz",
            mobile: 23,
            active: 0
        })
        const result = await data.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
    
}
//call function       donot call function again and again,thats why commented,bc now work on reading and query
//createDocument();


//insert multiple documents using mongoose
const createDocuments = async () => {
    try { 
         //Playlist is a collection name
        const jsPlaylist = new Playlist({
            name: "javascript",
            videos: "frontend",
            author: "fayaz",
            mobile: 23,
            active: 0
        })

        const expressPlaylist = new Playlist({
            name: "express",
            videos: "framework",
            author: "fayaz",
            mobile: 23,
            active: 0
        })

        const mongoPlaylist = new Playlist({
            name: "mongoDB",
            videos: "frontend",
            author: "fayaz",
            mobile: 23,
            active: 0
        })
        const result = await Playlist.insertMany([mongoPlaylist, expressPlaylist, jsPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
//call function,    donot call function again and again,thats why commented,bc now work on reading and query
createDocuments();


//read and quering of data
const readDoc= async()=>{
    try{
        const result= await Playlist.find({name:"express"})
        .select({videos:1})     //videos:1 means show vedio and videos:0 means dont show
        .limit(2);

        console.log(result);
    }catch(err){
        console.log(err);
    }
};

//call reading function
//readDoc();

//Read Data using comperison operator
//$eq = equal                {field:{$eq:value}}
//$gt = greater              {field:{$gt:value}}
//$gte = greater or equal    {field:{$gte:value}}
//$lt = lessthan             {field:{$lt:value}}
//$lte = lessthan or equal   {field:{$lte:value}}
//$ne = not equal            {field:{$eq:value}}
//$in = in operator          {field:{$in:[value1,value2....]}}
//$nin = not in operator     {field:{$nin:[value1,value2....]}}


const comper= async()=>{
try {
    const result = await Playlist.find({ mobile: {$gte:13}, name:{$in:["express","waqas"]}})
        .select()
        .limit();

    console.log(result);
} catch (err) {
    console.log(err);
}
};

//call reading function
//comper();


//READ DATA using logical operator

//$or    find({$or: [ {},{},{}] } )
//$and   find({$and: [ {},{},{}] } )
//$not   find({$not: [ {},{},{}] } )
//$nor   find({$nor: [ {},{},{}] } )

const logi = async () => {
    try {
        const result = await Playlist.find({$and: [{name:"waqas"},
        {mobile:{$gt:20}}] })
            .select()
            .limit();

        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

//call reading function
//logi();


//counting and sorting
// countDocuments()
// sort({name:1 or -1})
const counts = async () => {
    try {
        const result = await Playlist.find().select({name:1})
        .sort({name:1});    //name:1 means start from A to Z and name:-1 means from Z to A
       // .countDocuments();

        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

//call reading function
//counts();


//UPDATE DOCUMENTS USING MONGOOSE in express
const updatedoc = async (_id)=>{
try{
    // const result = await Playlist.updateOne({ _id },{ $set: { name: "JAVASCRIPT" }});
    const result = await Playlist.findByIdAndUpdate({_id },
         { $set: { name: "JAVASCRIPT frontend" }},
         {new:true,useFindAndModify:false});

        console.log(result);

}catch(err){
    console.log(err);}
}

//call update function, modify by using spacific id of document, id copied from compass
//updatedoc("6022d67b842baa1054317ff7");



//DELETING DOCUMENTS USING MANGOOSE
const deletedoc = async (_id) => {
    try {
        // const result = await Playlist.deleteOne({_id})
        const result = await Playlist.findByIdAndDelete({ _id })

        console.log(result);

    } catch (err) {
        console.log(err);
    }
}

//deletedoc("6022d67b842baa1054317ff6");