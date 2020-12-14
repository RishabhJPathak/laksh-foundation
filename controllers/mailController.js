const { transporter } = require("../init/nodemailer");

exports.send = async (req, res) => {
  try {
    const { name, email, message, phone, website } = req.body;
    const content = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const userHTML = `
    <html>
      <body>
        <div style="display: flex;flex-direction: row; align-items: center;justify-content: center;">
          <img src="cid:logo" width="50" height="40">
          <h1>Laksh Foundation</h1>
        </div>
        <div style="padding: 0 20%;margin-top: 20px">
          <h3>Form Details: </h3>
          <p><strong>Name:</strong> ${name} </p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p style="white-space: pre;"><strong>Message:</strong> ${message}</p>
        </div>
        <div style="font-size: 12px;width: 100%;text-align:center;margin-top: 20px">
          This email was sent from <a href="${website}" target="_blank" title="Laksh Foundation">Laksh Foundation's </a> Contact Form.<br>
          You can Ignore it, If Email ${email} wasn't entered by you. 
        </div>
      </body>
    </html>
    `;
    const selfHTML = `
    <html>
      <body>
        <h2 style="width: 100%; text-align: center;">Form submitted By ${name}</h2>
        <div style="padding: 0 20%;">
          <h3>Form Details: </h3>
          <p><strong>Name:</strong> ${name} </p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p style="white-space: pre;"><strong>Message:</strong> ${message}</p>
        </div>
      </body>
    </html>
    `;
    const mail = {
      from: email,
      to: "clusmsyknight@gmail.com",
      subject: `New message to LakshFoundation from ${name}`,
      text: content,
      html: selfHTML,
    };

    const selfMessage = await transporter.sendMail(mail);
    if (selfMessage) {
      try {
        const userMail = await transporter.sendMail({
          from: "clusmsyknight@gmail.com",
          to: email,
          subject: `${name}'s Submission was successful`,
          text: content,
          html: userHTML,
          attachments: [
            {
              filename: "logo.png",
              path: "./logo.png",
              cid: "logo",
            },
          ],
        });
        return res.json({ msg: "Message Sent: " + userMail.response });
      } catch (error) {
        return res.json({ err: "Failed to send mail", error });
      }
    }
  } catch (error) {
    return res.json({ err: "Failed to send mail", error });
  }
};
