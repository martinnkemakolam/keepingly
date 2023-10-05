export let handleInput =(name, value, hook, setHook)=>{
    setHook(
        {
            ...hook,
            [name]: value
        }
    )
}