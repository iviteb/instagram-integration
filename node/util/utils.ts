import { Apps } from '@vtex/api'
import axios from 'axios'

export const getSettings = async (ctx: any) => {
    const apps = new Apps(ctx.vtex);
    return await apps.getAppSettings(ctx.vtex.userAgent)
}

export const getInstagramDetails = async (settings: any) => {

    return axios({
      url: `https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink,thumbnail_url&access_token=${settings.accessToken}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).catch(err => {
      return err
    })
}