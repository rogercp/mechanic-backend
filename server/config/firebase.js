
const admin = require('firebase-admin');

/**
 * Initialize firebase client
 */

admin.initializeApp({credential:admin.credential.cert({

    "type": "service_account",
    "project_id": "mech-3223c",
    "private_key_id": "8f2f094bb5926f4ada4b3cd6cc040b0f155b652b",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDUPc9rjtDRi8Ky\nr0VMQXL68G2gG6xBvzHfgFU39jrx4XGVGePq/PMN3UHn0ktGhrduenueMKshijBP\n22+j4K8YgA1LXiTyArF4LhHa8V4/vlOQhgy7NnwoyiELW3f+GFIm8/EpLfrl+zyf\nTi4UmQwgOIoVozFWUgyO+MUZiPzIubTJ30D6tiklXev7jns0VXv/fGmnuxkkq8on\n9+CyATGhzmroIcpo3Q2jNL4+XjyIE424d0SOVZ40Iryho0/z5dEDigA5xNl6HvXA\nZe2HrXyi6LOwc3uDgcrLgNZtCVPMdAyYMmX6IWC4loJcFj8nxR4FCxIv4+L0KC1Q\ngIiKirYjAgMBAAECggEAGZHOxOcCSlR7otpRz3ONHiVMF79tu8gEgqgr3B+aj1x5\nOhzR5BQQVinDUGH59qexPqqb7P1xCIvk8SH/K6+ceKeosl1Hty5S4icuuIFeuPA9\nkgpMS1uvjpx3aa5d4OteLloyQiNLeFyRu6GIFKwxlUoqfJvaDEu7PphC6qYhyi64\n83wxYdv5YvXletjJdhNEBgJYhR4BuFGDaRBT7cFVdPOYLHsuQ8ZOMT4srDL2E+56\nS4y3uonLwPV2IS2Yrmen4d586qiEuLOOMuAmxnPi7sGbOjL+0/cTvZjQTwIz+yCS\nQjh/K67q0O1xzk8YI4hehcmtvIzUN3q0vI//j2aHnQKBgQD+YZFHJKbYmNWpG1Ky\nu9pC2nCh/DFZAEOKDEXJ1kxtEVpBHmx79mR4YkixLVu3FLu2twZWULxUceZl2LZm\nxNt1PHi+4owJq7gil5htMM57OL+/o8U+nOBFByxtDzqqTodEWiPzkpPa5Stm/kBE\nb2UbSPYaAn9av32Ocwn9DCRu/wKBgQDVl5bzCrAYT/0FMs6/vKkhudupmTOjkQji\nqTudK4Y7sf6Gzv97xtW0WKDELrSZO33l0oH1zZ+RngL6makqnUknUMY77/zMuAli\nKmV3LSMEgapv7hDJ0JosA0+I777GXtyKrUbupUjNFOOmaBnkZHqYn6PTpRDavvzf\nP+CIkA0c3QKBgQC8UHY/+H4bcmkZm0SJVE+rlhIzmILfpDZbh+JSHPbO9z2dX2xo\nCGswQ3IU18NBsXOVO8DRPUtuKDOrydaeFbVxAKdSiFuq/Rh/Y0JP8wWoasZolFB8\nnZ3Y/AqDYfbIBQJWM3TR5/zU2zpaMHZbMyviGw01DAxDnebRAZCvZ8HA+QKBgGwN\nbf2x0HfcL0Hr/A+fX2iCX4+iwy7h9j7EIjZWiGe2me6U1UZGxmGf3GSixBYotH4J\nSlmRFkJST2t7RMscGp/bCw3TUG44Q/b3P7FUkjx7ZD+PjcqqzvOpERlTP42W+7bk\nBdhAoV2uTaQnUcHq2uJPEE/HV4lxyPcfl3U+eoO5AoGAH2MGhejpqL2EcqX36Bnl\nVupPU+lbq+uYSJaQD5naErr3hNg5dTb4z2znnk6s55L9YQKHIzvDZxyvCqkN0SIS\nD52C54xvE/8g2XmMGbxKoRSPHUcfRNcnImIoJvndkKsQ+y4cI8PH5pGB85/s7K2y\nCfQJZvEMIqKGPxIvz+ldtvw=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-j393b@mech-3223c.iam.gserviceaccount.com",
    "client_id": "100304820514804012696",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-j393b%40mech-3223c.iam.gserviceaccount.com"
  
})});


module.exports = admin
