const bcrypt=require("bcrypt");


async function hash(password) {
    const hashPassword= await bcrypt.hash(password,10)
    console.log(hashPassword);
    return hashPassword;
}

async function comparePassword(plainPassword,hashedPassword) {
    const match= await bcrypt.compare(plainPassword,hashedPassword);
    return match;
}

async function passwordLogic() {
    const password= "abcde";
    const result= await hash(password)
    console.log(result);
    const isSamePassword= await comparePassword("abcde",result);
    console.log(isSamePassword);
}
passwordLogic()
