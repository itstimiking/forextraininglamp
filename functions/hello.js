
exports.Hello = async (event,context) => {
    return{
        statusCode: 200,
        body:{
            name: "Timi King",
            gender: "Male"
        }
    }
}