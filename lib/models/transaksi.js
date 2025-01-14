import { Schema, model } from "mongoose";

const transaksiSchema = new Schema({
    qrCode : { type : String, require : true },
    rfid : {type : String, require : true},
    hargaSatuan : {type : Number, require: true},
    jumlah : {type : Number, require: true},
    waktuPesan : Date
});

    transaksiSchema.pre("save", function(next){
        let currentDate = new Date();
        this.waktuPesan = currentDate;
        next();
    });

    export default model('transaksi', transaksiSchema);