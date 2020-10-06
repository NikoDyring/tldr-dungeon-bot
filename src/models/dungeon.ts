import { Document, Schema, Model, model /* Types <- You'll need this eventually */ } from 'mongoose'

/*
 * Reading-fabric?
 * https://medium.com/@tomanagle/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722
 * https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1
 */

// const required = true

export interface DungeonDocument extends Document {

}

const DungeonSchema = new Schema<DungeonDocument>({

})

export interface DungeonModel extends Model<DungeonDocument> {

}

export default model<DungeonDocument, DungeonModel>('Dungeon', DungeonSchema)
