a = int(input())
for i in range(a, 1, -1):
    if(a % i == 0):
        temp = i
print(temp)