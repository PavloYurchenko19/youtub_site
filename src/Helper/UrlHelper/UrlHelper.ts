import { UseLocationInterface } from '../../Interface'

export const pathInclude = (url: UseLocationInterface): string => {
  const include = url.pathname.split('/')[1]
  return include
}
