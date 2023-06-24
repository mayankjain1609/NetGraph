const neo4j = require("neo4j-driver");

var driver = neo4j.driver("neo4j+s://88fca1c5.databases.neo4j.io", neo4j.auth.basic("neo4j", "WGv4_-VksV4NLz88Wmb8MSu96hX1sML1KM9Ta1Xz4CA"));
var session = driver.session();
console.log("start session");
session
  .run( "CREATE (a:Person {name:'kuldeep', title:'King'})" )
  .then( function()
  {
    console.log("return from second session")
    session.run( "MATCH (a:Person) WHERE a.name = 'kuldeep' RETURN a.name AS name, a.title AS title" ).then( function( result ) {
      console.log( result.records[0].get("title") + " " + result.records[0].get("name") );
      session.close();
      driver.close();
    })

  })