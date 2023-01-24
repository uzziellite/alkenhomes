import {sendmail} from '@directives/mailer.js'

export const post = async ({ request }) => {
  const body = await request.json()
  const name = body.name
  const phone = body.phone
  const email = body.email
  const subject = 'Callback Request By Client'

  const report = `Hello, you have received a new message from one of your online contact forms available at https://www.alkenhomes.com The message is from ${name}<br><br>Email: &nbsp;${email}<br><br>Phone: &nbsp; ${phone}`

  await sendmail(report,subject,email,name).catch((error) => {
    console.error(`Unable to send email: ${error}`)
  })
  
  return {
    body: JSON.stringify({
      message:"Email successfully sent"
    })
  }
}
