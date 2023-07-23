async function main() {
    // const HelloWorld = await ethers.getContractFactory("HelloWorld");
 
    // // Start deployment, returning a promise that resolves to a contract object
    // const hello_world = await HelloWorld.deploy("Hello World!");
    // console.log("Contract deployed to address:", hello_world.address);}
    const Ballot = await ethers.getContractFactory("Ballot");
    const ballot = await Ballot.deploy("Ballot deploy");
    console.log("Contract deployed to address:", ballot.address);}
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
 