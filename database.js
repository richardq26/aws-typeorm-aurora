const typeorm = require("typeorm-aurora-data-api-driver");
const EntitySchema = typeorm.EntitySchema;

let connection;
module.exports = async () => {
  let start = new Date().getTime();
  if(connection){
      return connection;
  }
  connection = await typeorm.createConnection({
    type: "aurora-data-api",
    database: "database-1",
    secretArn: "database-1-instance-1.ceb32c5adnxs.us-east-1.rds.amazonaws.com",
    resourceArn: "arn:aws:rds:us-east-1:525713275182:db:database-1-instance-1",
    region: "us-east-1",
  });

  let end = new Date().getTime();
  console.log('Tiempo de conexión', end-start);

  return connection;
};
