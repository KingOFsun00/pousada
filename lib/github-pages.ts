export const basePath = process.env.NODE_ENV === 'production' ? '/pousada-savacipo' : ''

export function getImagePath(imagePath: string): string {
  if (imagePath.startsWith('http') || imagePath.startsWith('//')) {
    return imagePath
  }
  
  if (imagePath.startsWith('/')) {
    return `${basePath}${imagePath}`
  }
  
  return `${basePath}/${imagePath}`
}

export function getPagePath(pagePath: string): string {
  if (pagePath === '/') {
    return basePath || '/'
  }
  
  return `${basePath}${pagePath}`
}
