n = int(input())
a = input().split()
check = False
for i in range(0, n - 1):
    if (int(a[i]) >= 0 and int(a[i + 1]) >= 0) or (int(a[i]) < 0 and int(a[i + 1]) < 0):
        check = True
        break
if check:
    print("YES")
else:
    print("NO")