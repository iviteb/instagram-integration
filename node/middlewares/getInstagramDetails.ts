import { getSettings, getInstagramDetails} from '../util/utils'  
  
  export async function instagramDetails(ctx: Context, next: () => Promise<any>) {
    
    try {
      const settings = await getSettings(ctx)
      const instagram = await getInstagramDetails(settings)
        
      ctx.response.status = 200
      ctx.response.body = instagram.data
    } catch (exception) {
      console.error(exception.message)
      throw exception
    }
    await next()
  }
  