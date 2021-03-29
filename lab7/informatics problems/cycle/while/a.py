import math
x = int(input())
i = 1
while(i < (math.floor(math.sqrt(x)) + 1)):
    print(i**2)
    i += 1