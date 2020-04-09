const mongoose =require('mongoose');

//Criar uma variavel e instancia-lá, no objeto passando os campos que deseja salvar no BD
const ProductSchema =   new mongoose.Schema({
  title:{

    type:String,

    required : true

  },

  description:{

    type:String,

    required : true

  },

  url:{

    type:Date,

    default:Date.now
    
  }
});

mongoose.model('Product',ProductSchema);