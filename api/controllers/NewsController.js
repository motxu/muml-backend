/**
 * NewsController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');


module.exports = {
	


  /**
   * `NewsController.create()`
   */
  create: function (req, res) {
    
    var params=req.params.all();
    var user="motxu";
    var folder="../../assets/uploads/news/"+user;
    console.log('start create');
    console.log(params.image);
    console.log(req.file('image'));
    req.file('image').upload({
          // You can apply a file upload limit (in bytes)
          maxBytes: 1000000,
          dirname: folder
        }, function whenDone(err, uploadedFiles) {
          console.log('upload done');
          if (err) return res.serverError(err);
          
          if (err) {
            return res.negotiate(err);
          }

          // If no files were uploaded, respond with an error.
          if (uploadedFiles.length === 0){
            return res.badRequest('No file was uploaded');
          }

          var fileName=uploadedFiles[0].fd;
          createNews(fileName);          
           
         });
    function createNews(fileName){

          News.create({caption: params.caption, createdby: "motxu", updatedby:user,imageurl:fileName, categoryid:params.categoryid 
    }).exec(function createCB(err,created){
      if (err) return res.serverError(err);      
    
        return res.json(created)

     });
    }


  },






  /**
   * `NewsController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

