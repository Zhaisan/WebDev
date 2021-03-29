def xor(a, b):
    res = a ^ b
    return res
x, c = map(int, input().split())
print(xor(x, c))