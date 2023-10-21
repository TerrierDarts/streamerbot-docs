export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (file._id.endsWith('.md')) {
      file.body.children = file.body.children.filter(child => {
        // Remove duplicate title
        if (child.tag === 'h1' && child.children.at(0)?.value === file.title) {
          return false;
        }

        // Remove duplicate description
        if (child.tag === 'p' && child.children.at(0)?.value === file.description) {
          return false;
        }

        return true;
      })
    }
  })
})
