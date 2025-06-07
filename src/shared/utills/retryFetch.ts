export const retryFetch = async <T>(fn : () => Promise<T>, retries:number = 3, delay:number = 300) => {
    let lastError:Error|null = null
    for (let i = 0; i < retries; i++){
        try{
            return await fn();
        }
        catch(err){
            lastError = err instanceof Error ? err : new Error(String(err))
            if (i < retries - 1){
                await new Promise((res) => (setTimeout(res, delay)))
            }
        }
    }
    if (lastError){
        console.warn(lastError);
        throw lastError
    }
    throw new Error("Произошла неизвестная ошибка")
}