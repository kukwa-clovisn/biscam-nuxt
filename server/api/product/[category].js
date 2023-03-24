

export default defineEventHandler((event) => {

    const query = event.context.params.id

    console.log('query',query)
    return{ 
        message:'fetching data by categories',
        prams:query
    }
})