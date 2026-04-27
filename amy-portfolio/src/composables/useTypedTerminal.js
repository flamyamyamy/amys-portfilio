import { ref, onMounted } from 'vue'

export function useTypedTerminal(texts) {
  const displayed = ref('')

  let textIndex = 0
  let charIndex = 0
  let deleting = false

  function loop() {
    const current = texts[textIndex]

    if (!deleting) {
      displayed.value = current.slice(0, charIndex++)
      if (charIndex > current.length) {
        deleting = true
        return setTimeout(loop, 1800)
      }
    } else {
      displayed.value = current.slice(0, charIndex--)
      if (charIndex < 0) {
        deleting = false
        textIndex = (textIndex + 1) % texts.length
      }
    }

    setTimeout(loop, deleting ? 35 : 70)
  }

  onMounted(loop)

  return { displayed }
}