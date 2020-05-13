const admin = require('firebase-admin')
const serviceAccount = require('./account_key.json')

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })

admin.auth().getUser(/*uid*/).then(user => console.log(user.toJSON()))
admin.auth().updateUser(/*uid*/, { emailVerified: true }).then(user => console.log(user.toJSON()))

// doesn't send an email, just generates a link
admin.auth().generateEmailVerificationLink(/*email*/, { url: /*continue_url*/ }).then(link => console.log(link))

// Referência da API Admin -> https://firebase.google.com/docs/reference/admin/node/admin.auth.Auth
// Guias API Admin -> https://firebase.google.com/docs/auth/admin/manage-users