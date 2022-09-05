const getResult = (a, b) => a+b

export const FirstApp = ( { title, subtitle } ) => {

    return (
        <>
            <h1>{ title }</h1>
            <p>{ subtitle + 1 }</p>
        </>
    )
}