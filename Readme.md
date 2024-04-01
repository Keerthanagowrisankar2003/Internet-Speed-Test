# 🎯 Website to calculate the internet speed
- An internet speed test website is a platform or online service that allows users to measure their internet connection's speed and performance. 

-  These websites typically provide tools and functionalities to assess various aspects of an internet connection, such as download speed, upload speed, ping latency and additional information as jitter.
## API CALLS NEEDED
- Speed Test:
  # PING Latency:
    ### `User Request`:
    - Test network speed
    ### `Client`: 
    - sends some data
     ### ` Server Response`:
    - any response like(data successfully recieved)
    ### `client side`:
    - recieves the data and calculates of time taken by the server to respond(PING latency in ms).

  # Download Speed test:
    ### `Client`:
    - request to download a file from the server that is hosted in the server
     ### ` Server Response`:
    - sends the file to client
    ### `client side`:
    - recieves the file and calculates of time taken to download the file from the server

  # Upload Speed test:
   ### `Client`:
   - sends a file to server
   ### ` Server Response`:
    - a sucessful message that file have been uploaded `i.e.File Sucessfully uploaded`
   ### `client side`:
    - After recieving the response it calculates the time taken to upload the file.

# (Additional analysis of jitter(if needed)):
Jitter :  allows users to assess the stability and consistency of their internet connection in addition to its speed.
    - the same ping latency process is repeated multiple times and the average of all the values is taken.

# (Optional one if the user need to store the history of their Internet speed test)
- SIGN UP:
    ### `Request`:

    - E-mail Id +  Password

    ### `Response`: 
    - Sucessfully signed-in 

- LOGIN:
    ### `Request`:
   - Email Id + password
   ### `Response`:
    - Sucessfull login message + jwt token
