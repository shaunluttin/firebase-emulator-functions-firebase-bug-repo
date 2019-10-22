Reproduction
```
npm install
./node_modules/.bin/firebase emulators:start
```

Output
```
i  Starting emulators: ["functions","firestore"]                                                                                   
✔  functions: Using node@8 from host.                                                                                              
✔  functions: Emulator started at http://localhost:5001                                                                            
i  firestore: Serving ALL traffic (including WebChannel) on http://localhost:8080                                                  
⚠  firestore: Support for WebChannel on a separate port (8081) is DEPRECATED and will go away soon. Please use port above instead. 
i  firestore: Emulator logging to firestore-debug.log                                                                              
✔  firestore: Emulator started at http://localhost:8080                                                                            
i  firestore: For testing set FIRESTORE_EMULATOR_HOST=localhost:8080                                                               
i  functions: Watching "/mnt/c/dev/temp/firebase-emulators-bug-report/functions" for Cloud Functions...                            
⚠  Non-existent functions.config() value requested!                                                                                
   - Path: "firebase.projectId"                                                                                                    
   - Learn more at https://firebase.google.com/docs/functions/local-emulator                                                       
```

The problem is the `Non-existent functions.config() value requested!`.

