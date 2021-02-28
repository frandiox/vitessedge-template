import { EdgeProps } from 'vitedge'

export default <EdgeProps>{
  async handler({ name }) {
    return {
      data: {
        server: true,
        message: `Welcome to Vitessedge`,
      },
    }
  },
}
