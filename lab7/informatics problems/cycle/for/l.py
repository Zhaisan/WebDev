x = int(input())
decimal = 0
i = 0
n = 0
while(x != 0):
    dec = x % 10
    decimal =  decimal + dec * pow(2, i)
    x = x // 10
    i += 1
print(decimal)