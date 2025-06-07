export const getParamFromLink = (link : string, par:string) => {
    const url = new URL(link);
    return url.searchParams.get(par);
}