function validateCode (code) {
  const pattern = /^[1-3]/
 return pattern.test(String(code))
}

function validateCode (code) {return /^[123]/.test(code)}
