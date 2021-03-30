def end_other(a, b):
    long_s, short_s = (a, b) if len(a) >= len(b) else (b, a)
    long_s.lower().endswith(short_s.lower())

