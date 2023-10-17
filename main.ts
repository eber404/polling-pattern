type Content = {
  message: string
}

type Callback = (content: Content) => void

interface Options {
  interval_ms?: number
}

function polling(
  url: string,
  fn: Callback,
  { interval_ms = 1500 }: Options = {}
) {
  const poll = () =>
    fetch(url)
      .then((res) => res.json())
      .then((body) =>
        Object.entries(body).length > 0
          ? fn(body)
          : setTimeout(poll, interval_ms)
      )

  poll()
}

// usage
function handleRequest(content: Content) {
  console.log('[new message from server]:', content.message)
}

polling('http://localhost:3334/', handleRequest)
