import config from './config'
import { unstable_createResource } from './lib/react-cache'

export const newspageResource = unstable_createResource(
  ({ list, page }: { list: string; page?: number }) =>
    fetch(`${config.apiBaseUrl}${list}/${page || 1}.json`).then(res =>
      res.json()
    ),
  ({ list, page }: { list: string; page?: number }) => list + page
)

export const commentsResource = unstable_createResource((id: string) =>
  fetch(`${config.apiBaseUrl}item/${id}.json`).then(res => res.json())
)

export const userResource = unstable_createResource((id: string) =>
  fetch(`${config.apiBaseUrl}user/${id}.json`).then(res => res.json())
)
