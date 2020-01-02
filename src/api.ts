import config from './config'
import { unstable_createResource } from './lib/react-cache'

export const newspageResource = unstable_createResource((page?: number) =>
  fetch(`${config.apiBaseUrl}news?page=${page || 1}`).then(res => res.json())
)

export const commentsResource = unstable_createResource((id: string) =>
  fetch(`${config.apiBaseUrl}item/${id}`).then(res => res.json())
)

export const userResource = unstable_createResource((id: string) =>
  fetch(`${config.apiBaseUrl}user/${id}`).then(res => res.json())
)
