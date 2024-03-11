export const fetchPegaDataPage= async (pageName: string): Promise<JSON>  => {
    //@ts-ignore
    if (!window.PCore) return

    //@ts-ignore
    return window.PCore.getDataApiUtils().getData(pageName, payload, '')
    .then( (response: any) => {
      // response.data contains the results array
      return response.data.data;
    })
    .catch((e: any) => {
      console.log(`Error retrieving worklist: ${JSON.stringify(e)}`);
   });
}