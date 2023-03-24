

export default defineEventHandler(async (event) => {

    const query = event.context.params.category;

    console.log('query',query)
    return{ 
        message:'fetching data by categories',
        prams:query
    }
})