var aws=require('aws-sdk');
let awsConfig={
    "region":"local",
    "endpoint":"http://localhost:8000"
    //"accessKeyId":"foo"//"secretAccessKey":"bar"
};
var uuid =Date.now()+require('uuid/v1')();
aws.config.update(awsConfig);
aws.config.paramValidation = false;

let docClient=new aws.DynamoDB.DocumentClient({ paramValidation: false });
let fetchOneByKey=function(){
    var ttt={
        TableName: 'Albums',
        //IndexName:"SongIdIndex",
        // KeyConditionExpression: " = :a",
        // ExpressionAttributeValues: {
        //     ":a": "1"
        // },
        // ScanIndexForward:true,

        // FilterExpression: 'SongId',
        //IndexName:'Artist'
     }
    // var params = {
    //     TableName: 'fruits',Key:{fruitId:'dssfd'}
    // };
    // docClient.get(params,function(err,data){
    //     if(err){
    //         console.log("users:fetchonebyId:error "+JSON.stringify(err,null,2));
    //     }
    //     else{
    //         console.log("users:fetchonebyId:success "+JSON.stringify(data,null,2))
    //     }
    // })
    // docClient.scan(ttt,function(err,data){
    //     if(err){
    //         console.log("users:scan:error "+JSON.stringify(err,null,2));
    //     }
    //     else{
    //         console.log("users:scan:success "+JSON.stringify(data,null,2))
    //     }
    // })
    var ttyu={
        TableName: 'Albums',Key:{id:'1536489213085ccfa6a00-b41b-11e8-8c6a-f90db45bbaec',CreatedAt:153648921308},
        UpdateExpression: "set Vocal = :r",
        ExpressionAttributeValues:{
            ":r":"Chester Benengton5"
        },
        ReturnValues:"UPDATED_NEW"
    };
    docClient.update(ttyu,function(err,data){
        if(err){
            console.log("users:scan:error "+JSON.stringify(err,null,2));
        }
        else{
            console.log("users:scan:success "+JSON.stringify(data,null,2))
        }
    })
}
fetchOneByKey()