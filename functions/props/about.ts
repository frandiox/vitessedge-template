import { EdgeProps } from 'vitedge'

export default <EdgeProps>{
  async handler() {
    // TODO: how to disable props for Markdown pages?
    return { data: {} }
  },
}
