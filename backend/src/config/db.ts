import colors from 'colors'
import mongoose from 'mongoose'

console.log(process.env.MONGO_URI);

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI!)

    console.log(
      colors.cyan.bold('✅ MongoDB conectado correctamente'),
      connection.host
    )

  } catch (error: any) {
    console.error(
      colors.bgRed.white('❌ Error MongoDB:'),
      error.message
    )
    process.exit(1)
  }
}
