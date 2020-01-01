import config from './config'

export function fetchNewspage(page?: number) {
  const promise = fetch(
    `${config.apiBaseUrl}news?page=${page || 1}`
  ).then(res => res.json())

  return wrapPromise(promise)
}

export function fetchComments(id: string) {
  const promise = fetch(`${config.apiBaseUrl}item/${id}`).then(res =>
    res.json()
  )

  return {
    news: wrapPromise(promise),
    comments: wrapPromise(promise)
  }
}

function wrapPromise(promise: Promise<unknown>) {
  let status = 'pending'
  let result: unknown

  const suspender = promise.then(
    res => {
      status = 'success'
      result = res
    },
    err => {
      status = 'error'
      result = err
    }
  )

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    }
  }
}
