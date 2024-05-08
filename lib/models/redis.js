import { createClient } from "redis";
const redisClient = createClient();
const DEFAULT_EXPIRATION = 3600 ;

// Untuk redis conection 

(
    async () => {
        await redisClient
        .on('error', err => console.log('Redis clinet error', err))
        .connect();
    }
)();

export default redisClient; 