import { printer } from './printer'

describe('printer', () => {
  const toAlert = (str: string) => `🚨 ${str} 🚨`
  const log = jest.fn()
  const alertString = 'Boom shakalaka'

  beforeAll(() => {
    global.console = { log } as any
  })

  it('calls console.log with the output of a given function + value', () => {
    // 🏃‍♂️ Do the thing
    printer(toAlert)(alertString)

    // 🔍 Check the thing
    expect(log).toHaveBeenCalledTimes(1)
    expect(log).toHaveBeenCalledWith(toAlert(alertString))
  })
})
