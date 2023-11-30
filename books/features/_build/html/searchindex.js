Search.setIndex({"docnames": ["OPE_Command_Line_Tool/install", "OPE_Command_Line_Tool/instruction", "env_tests/Environment_Tests", "features_intro", "gradescope_autograder/Extensions", "gradescope_autograder/Gradescope_Autograder", "jupytexmagic/Extensions", "jupytexmagic/Getting_Started", "jupytexmagic/Jupytexmagic", "misc/Miscellaneous", "rise_tests/Rise_Tests", "workflow_tests/Approval", "workflow_tests/Checksum", "workflow_tests/Container_Tests", "workflow_tests/Health", "workflow_tests/Image_version", "workflow_tests/Jupyter_nb", "workflow_tests/Package_version", "workflow_tests/Publish", "workflow_tests/Size_and_time", "workflow_tests/UI"], "filenames": ["OPE_Command_Line_Tool/install.md", "OPE_Command_Line_Tool/instruction.md", "env_tests/Environment_Tests.ipynb", "features_intro.md", "gradescope_autograder/Extensions.ipynb", "gradescope_autograder/Gradescope_Autograder.ipynb", "jupytexmagic/Extensions.ipynb", "jupytexmagic/Getting_Started.ipynb", "jupytexmagic/Jupytexmagic.ipynb", "misc/Miscellaneous.ipynb", "rise_tests/Rise_Tests.md", "workflow_tests/Approval.ipynb", "workflow_tests/Checksum.ipynb", "workflow_tests/Container_Tests.ipynb", "workflow_tests/Health.ipynb", "workflow_tests/Image_version.ipynb", "workflow_tests/Jupyter_nb.ipynb", "workflow_tests/Package_version.ipynb", "workflow_tests/Publish.ipynb", "workflow_tests/Size_and_time.ipynb", "workflow_tests/UI.ipynb"], "titles": ["Installation", "Instruction", "Environment_Tests", "Enhanced OPE", "Extensions", "Gradescope_Autograder", "Extensions", "Getting_Started", "Jupytexmagic", "Miscellaneous", "RISE Test", "Approval", "Checksum", "Container_Tests", "Health", "Image_version", "Jupyter_Notebook", "Package_version", "Publish", "Size_and_time", "UI"], "terms": {"These": [2, 3, 4, 7], "ar": [2, 3, 4, 5, 6, 7, 8, 10, 12], "group": [2, 7], "singl": [2, 7], "notebook": [2, 3, 6, 8, 10, 12], "call": [2, 5, 7], "all_test": 2, "ipynb": [2, 6, 8], "which": [2, 3, 4, 5, 6, 7, 8, 13], "you": [0, 2, 3, 5, 6, 7, 8, 13], "can": [2, 3, 5, 7, 8, 13, 14, 16], "run": [0, 1, 2, 3, 4, 6, 8, 10, 14, 16, 17], "us": [0, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13], "op": [0, 1, 2, 4, 5, 6, 7, 10, 13], "command": [0, 1, 2, 3, 7, 8, 10, 12], "thi": [0, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16, 17, 19], "output": [2, 7, 8, 10, 17], "result": [2, 4, 5, 7], "separ": [2, 6, 7, 13, 19], "them": [2, 7], "two": [2, 4, 6, 7, 13], "pass": [2, 13, 17], "fail": [2, 5, 7, 8, 16, 17], "we": [2, 3, 4, 5, 6, 7, 8, 10, 13, 17], "keep": 2, "track": 2, "global": 2, "error": [2, 10], "initi": [2, 6, 7, 10], "below": [2, 7, 13, 14], "var": [2, 7], "have": [0, 2, 4, 5, 6, 7, 8, 10, 12, 13], "import": [2, 3, 6, 7, 8, 10], "subprocess": [2, 7], "os": 2, "def": [2, 7], "shelltest": 2, "cmd": 2, "try": [2, 7], "check_output": 2, "shell": [2, 7], "true": [2, 7], "stderr": [2, 7], "stdout": [2, 7], "return": [2, 7], "0": [2, 7], "decod": [2, 7], "utf": 2, "8": [2, 7], "except": 2, "calledprocesserror": [2, 7], "e": [2, 4, 5, 6, 7, 8, 13], "returncod": 2, "new": [1, 2, 5, 7, 8, 10], "add": [1, 2], "handl": [0, 2, 4, 5], "1": [2, 4, 6, 7, 12, 13], "str": 2, "check": [2, 7, 13, 17], "TO": 2, "f": [2, 7, 12], "touch": 2, "path": [2, 5, 12], "expandus": 2, "test_write_permiss": 2, "tmp": 2, "echo": 2, "ye": 2, "rm": [2, 7], "No": [1, 2, 7, 12], "execut": [2, 3, 10], "append": 2, "els": 2, "confirm": [2, 10], "environ": [2, 7, 10, 13], "set": [1, 2, 5, 7, 8], "from": [1, 2, 4, 5, 6, 7, 10, 17], "dockerfil": [2, 10], "still": [2, 4], "exist": [2, 6, 7, 12], "maintain": [2, 10], "same": [2, 7], "valu": [2, 7], "within": [0, 1, 2, 10], "jupyt": [2, 3, 6, 7, 8, 16], "It": [0, 2, 4, 7, 12], "also": [2, 7, 13], "ensur": [0, 2, 3, 10], "user": [2, 3, 5, 7, 8, 10, 12], "ha": [2, 4, 5, 6, 7, 8, 13], "valid": [2, 4, 10], "uid": 2, "gid": 2, "customiz": 2, "rang": [2, 7], "verifi": [2, 7, 10, 12, 14, 15, 16], "correct": [2, 10, 12], "nb_uid": 2, "int": 2, "nb_gid": 2, "nb_group": 2, "xdg_cache_hom": 2, "nb_user": 2, "cach": 2, "uid_lower_bound": 2, "2000": 2, "uid_upper_bound": 2, "60000": 2, "gid_lower_bound": 2, "gid_upper_bound": 2, "expected_nb_group": 2, "root": 2, "err": 2, "check_environment_test": 2, "accept": 2, "doe": [2, 7], "match": [2, 17], "jovyan": 2, "xdd_cache_hom": 2, "expect": [2, 5, 17], "len": 2, "s": [2, 3, 5, 6, 7, 8, 10, 12, 17, 19], "join": 2, "print": [2, 6, 17], "keyerror": 2, "traceback": [2, 7], "most": [2, 7, 8], "recent": [2, 7], "last": [2, 7, 12], "cell": [2, 6, 7, 8, 10], "In": [0, 2, 3, 7, 10, 12], "3": [2, 7], "line": [2, 5, 7, 8], "5": [2, 3, 7], "6": [2, 7], "7": [2, 7], "file": [2, 3, 5, 6, 7, 8, 10, 12], "miniconda3": 7, "lib": 7, "python3": 7, "10": 7, "py": [5, 7, 10, 17], "680": [], "_environ": [], "__getitem__": 2, "self": [2, 7], "kei": [2, 3, 4, 5], "677": [], "_data": [], "encodekei": [], "678": [], "679": 2, "rais": 7, "origin": [], "none": 7, "681": [], "decodevalu": [], "contain": [0, 1, 2, 4, 5, 12, 13, 14, 16], "connect": [2, 5, 7], "internet": 2, "both": [2, 3, 5, 10], "ping": 2, "curl": 2, "becaus": [2, 5, 6, 7, 8], "some": [2, 4, 7, 8], "system": [2, 7, 12], "mai": [2, 5, 7], "one": [2, 5, 7, 8], "util": [2, 3], "default": [2, 4, 6], "our": [2, 3, 5, 7, 10], "case": [2, 7, 8], "cluster": [2, 4, 5], "configur": [2, 13], "did": 2, "includ": [0, 2, 4, 7, 10, 13], "If": [2, 4, 7, 8, 13, 16, 17], "either": [2, 6, 7], "work": [2, 3, 4, 5, 7, 13], "properli": [2, 6, 7, 8, 14, 16, 17], "otherwis": [2, 17], "e1": 2, "googl": 2, "com": [0, 2], "e2": 2, "packag": [2, 5, 7, 8, 10, 13, 17], "instal": [2, 7, 8, 17], "pytest": 2, "readlink": 2, "gitconfig": 2, "config": [2, 5, 12, 13, 17], "etc": 2, "ssh_config": 2, "check_permiss": 2, "dir_path": 2, "readabl": 2, "writabl": 2, "access": [2, 3, 10], "r_ok": 2, "w_ok": 2, "r": [2, 7], "w": [2, 7], "fals": [2, 7], "identifi": 2, "conda_base_dir": 2, "abspath": 2, "dirnam": 2, "sy": [2, 12], "conda_env_dir": 2, "get": [2, 6, 7], "conda_prefix": 2, "unaccessible_dir": 2, "dir_nam": 2, "base": [2, 5, 7, 12, 13, 17], "n": [2, 7, 12], "all": [2, 5, 6, 7, 8, 10, 12, 13], "aslr": 2, "statu": [2, 7], "enabl": [2, 7], "2": [2, 6, 7, 13], "disabl": 2, "partial": [2, 7], "full": [2, 8], "bin": 2, "sh": [0, 2, 5], "found": 2, "addit": [2, 7, 12], "ad": [2, 7, 13], "suit": 2, "compat": [2, 5, 7, 10], "need": [2, 4, 5, 6, 7, 8], "textbook": [2, 6], "thei": [2, 5, 7], "written": [2, 3, 6, 7, 12], "format": [2, 3, 6, 7, 8], "defin": [2, 7], "condit": 2, "test_command": 2, "insert": 2, "here": [2, 5, 7, 8, 17], "expected_result": 2, "environment_vari": 2, "requir": [0, 1, 2, 7, 10], "IF": 2, "applic": 2, "perform_test": 2, "execution_result": 2, "arrai": 2, "name": [1, 2, 5, 7, 12, 19], "messag": 2, "success": 2, "author": [2, 6, 7], "ross": 2, "mikulski": 2, "jonathan": [2, 12], "mikalov": [2, 12], "yuxi": 2, "ge": [2, 7], "yiqin": 2, "zhang": 2, "sprint": 3, "team": 3, "decid": 3, "shift": [3, 4], "focu": 3, "toward": 3, "comprehens": [3, 10], "document": [3, 6, 7, 8, 10, 13], "bring": 3, "collect": [3, 7], "cohes": 3, "effort": 3, "wa": [3, 7, 12, 13, 19], "part": [3, 6, 7, 13], "ongo": 3, "commit": 3, "open": [0, 3, 4, 10], "educ": [0, 3, 5, 10], "project": [0, 1, 3, 6, 8, 13], "recogn": 3, "clear": 3, "intern": 3, "broader": 3, "commun": 3, "One": 3, "repositori": [0, 1, 3], "dure": [3, 7, 10, 17], "find": [3, 6, 12], "github": [0, 3, 5, 6, 8, 13, 19], "link": [3, 5, 6, 8], "serv": [3, 4, 10], "central": 3, "hub": 3, "edit": 3, "contribut": [3, 13], "To": [3, 7, 10], "member": 3, "follow": [3, 6, 7, 8, 10, 13], "step": [3, 10, 13], "clone": [0, 3], "git": [0, 1, 3, 5], "rkulski": 3, "lab": [3, 6, 7, 16], "termin": [0, 3], "friendli": 3, "gui": 3, "web": [3, 8], "browser": 3, "relev": [1, 3], "subdirectori": 3, "after": [3, 10, 13], "complet": [3, 7, 10], "chang": [1, 3, 4, 6, 7], "make": [3, 6], "build": [1, 3, 5, 7, 8, 13, 16, 17, 19], "pub": [3, 5, 6, 7], "your": [0, 3, 5, 6, 7, 8, 13], "reflect": 3, "websit": 3, "By": [3, 10], "togeth": 3, "dedic": 3, "ourselv": 3, "aim": 3, "provid": [3, 5, 6, 8, 13], "valuabl": 3, "resourc": 3, "align": [3, 7], "knowledg": 3, "share": [3, 7], "introduct": 3, "riya": 3, "deokar": 3, "featur": [4, 6, 7, 10], "yet": 4, "product": [4, 7], "readi": 4, "reason": [4, 7, 8], "doesn": [4, 8, 16], "t": [4, 5, 6, 7, 8, 16, 19], "larg": [4, 6, 7], "volum": 4, "concurr": [4, 5], "request": [4, 5], "i": [4, 5, 6, 7, 13], "vm": [4, 5], "cannot": [4, 6, 7, 8], "100": [4, 7], "student": [4, 5], "submit": 4, "right": [4, 7], "befor": [4, 7], "deadlin": 4, "store": [4, 7, 13], "privat": [4, 5], "gradescop": [4, 5], "autograd": [4, 5], "fulli": [4, 7, 8], "want": [4, 5, 7, 8, 13], "problem": [4, 5, 6, 7], "list": [4, 13, 17], "abov": [4, 7, 13], "over": [4, 5, 7], "next": [4, 7], "month": 4, "solut": [4, 5], "first": [4, 7, 10], "plan": 4, "adapt": 4, "framework": [1, 4, 5], "red": [4, 13], "hat": [4, 7, 13], "spawn": 4, "an": [4, 5, 6, 7, 12, 14, 17], "onlin": [4, 6], "test": [0, 4, 5, 12, 14, 15, 16, 17, 19], "scp": [4, 5], "back": [4, 5], "host": 4, "aw": 4, "openshift": 4, "port": [4, 6], "listen": 4, "incom": 4, "state": [4, 5, 7], "wai": [4, 6, 7], "rather": [4, 5, 7], "other": [4, 5, 6, 7, 8, 12], "around": 4, "arriv": 4, "proper": [4, 6, 7], "certif": 4, "sign": 4, "ca": 4, "design": [0, 4, 5, 7], "class": [4, 5, 7, 8], "figur": [4, 7, 8], "out": [4, 7], "how": [4, 6, 7, 13], "level": [4, 7], "granular": 4, "correspond": [4, 5, 6, 7, 13], "code": [4, 5, 6, 7, 8, 10, 13], "send": [4, 5], "note": [4, 5, 7], "brainstorm": 4, "someth": [4, 7], "could": 4, "said": 4, "about": [4, 7], "risk": 4, "howev": [4, 7, 8, 19], "alreadi": [4, 5, 7], "secuirti": 4, "vulner": [4, 13], "repo": [5, 8, 13], "python": [5, 7, 8, 10], "layout": 5, "export": 5, "node": 5, "kernel": [5, 7], "program": [5, 7], "write": [5, 7, 8, 13], "assign": 5, "break": 5, "incompat": 5, "between": [5, 7], "than": [5, 7, 8], "whole": [5, 7], "even": [5, 17], "simpli": [5, 7], "ssh": 5, "custom": [5, 7, 8], "publish": [5, 6, 13], "offer": [5, 8], "great": [5, 8], "flexibl": 5, "especi": 5, "those": [5, 7], "sinc": [5, 7, 10, 12, 17], "runtim": 5, "much": 5, "eas": 5, "adopt": [5, 6], "so": [5, 6, 7, 8], "professor": 5, "gener": [5, 7, 12], "start": [5, 16], "world": 5, "diagram": 5, "refer": [5, 7], "nerc": 5, "england": 5, "research": [5, 10], "cloud": 5, "up": [5, 7, 12, 16], "ani": [5, 7, 8, 10], "id_ed25519": 5, "put": [5, 8, 19], "content": [5, 6, 8, 10], "public": [5, 7], "cat": 5, "insid": [5, 6, 7, 8, 12], "authorized_kei": 5, "real_run_autograd": 5, "real_setup": 5, "onc": [5, 6, 7], "log": [5, 7], "a282": 5, "container_id": 5, "docker": [5, 14], "dv": 5, "pwd": 5, "home": 5, "autograder_": 5, "email": 5, "should": 5, "replac": 5, "imag": [5, 7, 8, 12, 13, 14, 15, 19], "id": 5, "assum": 5, "pull": 5, "onto": 5, "zip": 5, "script": [5, 10, 19], "ignor": 5, "unecessari": 5, "g": [5, 6, 7, 8, 13], "directori": [0, 5, 6, 7, 12], "minim": [5, 7], "number": [5, 7, 8], "sake": 5, "effici": [5, 10], "framwork": 5, "differ": [5, 7, 10], "upon": [5, 6, 7, 8], "copi": [5, 6], "creat": [1, 5, 6, 7, 8, 10], "uniqu": [5, 6], "student_id": 5, "subsequ": 5, "delet": 5, "push": [5, 13], "due": [5, 7], "submiss": 5, "gradescope_util": 5, "check_submitted_fil": 5, "latter": 5, "locat": [5, 10], "wasn": 5, "big": 5, "issu": [5, 6, 10], "though": [5, 17], "remov": [5, 17], "test_fil": 5, "screenshot": [5, 8, 10], "At": 5, "end": [5, 7], "clean": 5, "The": [6, 7, 8, 10, 12, 13, 17], "face": [6, 7], "plugin": [6, 8], "pdfcrop": [6, 7, 8], "cli": 6, "tool": [0, 1, 6, 7, 8, 10], "crop": [6, 8], "tweak": 6, "render": [6, 7, 8], "page": [6, 7, 8, 10, 12], "contigu": 6, "enlarg": 6, "There": [6, 13], "involv": [6, 10], "adjust": 6, "xml": 6, "header": 6, "jupytexmag": [6, 7], "prepend": 6, "each": [6, 7, 13], "svg": [6, 7, 8], "fix": 6, "automat": 6, "tag": [6, 15], "tex": [6, 7, 8], "hide": 6, "input": [6, 7], "sourc": [1, 6, 8], "hidden": [6, 7], "compil": [6, 7, 8], "do": [6, 7, 8], "shouldn": 6, "too": 6, "hard": 6, "incorpor": 6, "fine": [6, 8], "book": [0, 1, 6, 8], "when": [6, 7, 8], "displai": [6, 7, 8, 10, 19], "platform": [6, 10], "glyph": 6, "size": [6, 19], "thrown": 6, "disarrai": 6, "text": [6, 7, 8], "vari": 6, "across": [6, 7, 10], "Not": 6, "sure": 6, "isn": [6, 19], "relat": [6, 7, 8], "d": [6, 7], "like": [6, 7, 8, 10, 13], "develop": [6, 7], "latex": [6, 7, 8], "would": 6, "immensli": 6, "power": [6, 7], "avenu": 6, "click": [6, 10], "button": [6, 10], "almost": 6, "scientif": 6, "paper": 6, "peopl": 6, "easili": 6, "exponenti": 6, "increas": [6, 7], "worldwid": 6, "oper": [6, 10], "entir": 6, "tree": 6, "new_book": 6, "metadata": [6, 13], "conent": 6, "booknam": 6, "_toc": 6, "yml": [6, 12, 13, 17], "specifi": [6, 17], "leav": 6, "allow": [6, 7, 8], "anoth": [6, 7], "enjoi": 6, "view": [6, 8], "pip": [7, 8, 10], "load_ext": [7, 8], "fun": 7, "place": [7, 8], "top": [7, 8], "texdebug": [7, 8], "magic": [7, 8], "pdflatex": [7, 8], "purpos": [7, 8, 10, 19], "satisfi": 7, "site": 7, "restart": 7, "updat": 7, "titl": 7, "9": 7, "neural": 7, "network": 7, "artifici": 7, "intellig": 7, "date": [7, 12], "usepackag": 7, "amsmath": 7, "amsfont": 7, "mathtool": 7, "graphicx": 7, "siunitx": 7, "v2": 7, "physic": 7, "dvipsnam": 7, "xcolor": 7, "caption": 7, "float": 7, "pgfplot": 7, "geometri": 7, "paperwidth": 7, "7in": 7, "paperheight": 7, "100in": 7, "margin": [7, 8], "1in": [7, 8], "pgfplotsset": 7, "18": 7, "inkscapelatex": 7, "declarepaireddelimit": 7, "ceil": 7, "lceil": 7, "rceil": 7, "floor": 7, "lfloor": 7, "rfloor": 7, "declaremathoper": 7, "argmax": 7, "arg": 7, "max": 7, "argmin": 7, "min": 7, "newcommand": 7, "df": 7, "textcolor": 7, "navyblu": 7, "textbf": 7, "declarecaptionformat": 7, "textit": 7, "small": 7, "captionsetup": 7, "commma": 7, "instead": [7, 13], "period": 7, "si": 7, "unit": 7, "sisetup": 7, "decim": 7, "marker": 7, "glossari": 7, "begin": 7, "maketitl": 7, "tablecont": 7, "section": [7, 8, 13], "subsect": 7, "what": [7, 8], "thought": 7, "let": 7, "take": [7, 10], "closer": 7, "look": 7, "brain": 7, "understand": 7, "philosophi": 7, "behind": 7, "As": 7, "visual": [7, 10, 13], "flamingo": 7, "paus": 7, "moment": 7, "read": 7, "think": 7, "come": 7, "my": 7, "mind": 7, "A": [7, 10, 13], "pink": 7, "black": 7, "tip": 7, "its": [7, 10], "beak": 7, "travel": 7, "pack": 7, "tall": 7, "nimbl": 7, "leg": 7, "order": 7, "ink": 7, "word": 7, "process": [7, 10], "mean": 7, "while": [7, 8], "simultan": 7, "sentenc": 7, "Then": [7, 8], "reach": 7, "memori": 7, "bank": 7, "recal": 7, "everyth": 7, "took": [7, 19], "data": [7, 10], "activ": [7, 10], "region": 7, "abstract": 7, "help": 7, "billion": 7, "neuron": 7, "caus": [7, 17], "footnot": 7, "human": 7, "86": 7, "total": 7, "veri": 7, "short": 7, "less": [7, 8], "milimet": 7, "length": 7, "meter": 7, "sai": 7, "li": 7, "continu": 7, "dormant": 7, "formal": 7, "equat": 7, "label": 7, "eq": 7, "a_i": 7, "mathbb": 7, "furthermor": 7, "neighbor": 7, "affect": 7, "cf": 7, "markov": 7, "chain": 7, "ask": 7, "question": 7, "again": 7, "ll": 7, "similar": [7, 8], "might": 7, "time": [7, 10, 19], "therefor": 7, "certain": 7, "reduc": 7, "strengthen": 7, "b": [0, 7], "associ": [1, 7], "scalar": 7, "w_": 7, "ab": 7, "strength": 7, "borrow": 7, "notat": 7, "eqref": 7, "model": 7, "weight": 7, "land": 7, "w_1a_1": 7, "w_2a_2": 7, "ldot": 7, "w_na_n": 7, "linear": 7, "combin": 7, "dc": 7, "multipli": 7, "quit": 7, "see": [7, 8, 13, 14], "why": [7, 13], "definit": [7, 8], "incomplet": 7, "well": 7, "previou": 7, "came": 7, "conclus": 7, "equal": 7, "constrict": 7, "capabl": [7, 8], "consid": 7, "answer": 7, "linearli": 7, "decis": 7, "boundari": 7, "hyperplan": 7, "onli": 7, "convex": 7, "hull": 7, "overlap": 7, "everi": 7, "relationship": 7, "abil": [7, 8, 10], "limit": 7, "hypersurfac": 7, "dimension": 7, "point": 7, "side": 7, "belong": 7, "second": 7, "subspac": 7, "dimens": 7, "space": 7, "occupi": 7, "repres": 7, "For": [7, 8, 12, 13], "hyper": 7, "plane": 7, "express": 7, "equival": 7, "dot": 7, "vector": 7, "combo": 7, "bmatrix": 7, "w_1": 7, "w_2": 7, "vdot": 7, "w_n": 7, "cdot": 7, "a_1": 7, "a_2": 7, "mathbf": 7, "a_n": 7, "gradient": 7, "respect": 7, "evalu": 7, "sum": [7, 12], "neihgbor": 7, "just": [7, 8], "constant": 7, "c": [7, 12], "nabla_": 7, "pdv": 7, "5em": 7, "variabl": [7, 8], "bound": 7, "therebi": 7, "degre": 7, "freedom": 7, "know": 7, "rate": 7, "ref": 7, "fig": 7, "sep": 7, "show": 7, "non": 7, "clearli": 7, "current": 7, "h": 7, "center": 7, "centerlin": 7, "includesvg": 7, "width": [7, 8], "75": 7, "columnwidth": 7, "linear_separ": 7, "dataset": 7, "color": 7, "cyan": 7, "blue": 7, "left": 7, "convex_hul": 7, "edg": 7, "drawn": 7, "angl": 7, "180": 7, "area": 7, "maxim": 7, "concav": 7, "But": 7, "determin": 7, "without": [7, 10], "draw": 7, "smallest": 7, "shape": 7, "enclos": 7, "more": [7, 13], "convex_overlap": 7, "graph": 7, "now": 7, "miss": [7, 17], "compon": 7, "curv": 7, "being": 7, "function": [0, 1, 7], "perceptron": 7, "preactiv": 7, "z": 7, "deriv": 7, "multipl": 7, "z_i": 7, "real": [7, 10], "a_1w_1": 7, "a_2w_2": 7, "a_nw_n": 7, "where": [7, 13, 17], "taylor": 7, "seri": [7, 13], "infinit": 7, "differenti": 7, "x": 7, "station": 7, "formula": 7, "frac": 7, "th": 7, "expans": 7, "sin": 7, "tikzpictur": [7, 8], "axi": 7, "grid": 7, "major": [7, 8], "xmin": 7, "xmax": 7, "middl": 7, "ymin": 7, "ymax": 7, "y": 7, "sampl": 7, "domain": 7, "legend": 7, "style": 7, "98": 7, "addplot": 7, "mark": 7, "cerulean": 7, "ultra": 7, "thick": 7, "deg": 7, "yelloworang": 7, "brown": 7, "skyblu": 7, "120": 7, "magenta": 7, "5040": 7, "t_1": 7, "t_3": 7, "t_5": 7, "polynomi": 7, "orang": 7, "teal": 7, "notic": 7, "strai": 7, "further": [7, 13], "approxim": 7, "becom": 7, "accur": [7, 10], "approach": 7, "infin": 7, "inaccuraci": 7, "iron": 7, "infti": 7, "stimulu": 7, "propag": 7, "fanci": 7, "spread": 7, "throughout": 7, "mush": 7, "stretch": 7, "map": 7, "stimuli": 7, "desir": 7, "binari": 7, "classif": 7, "layer": 7, "classifi": 7, "l": 7, "whether": 7, "digit": 7, "analog": 7, "fundament": 7, "block": 7, "made": [7, 12], "row": 7, "m": 7, "a_r": 7, "w_r": 7, "b_r": 7, "bia": 7, "consist": 7, "perform": [7, 10], "element": [7, 10], "half": 7, "a_m": 7, "r1": 7, "r2": 7, "z_r": 7, "denot": 7, "discuss": 7, "mani": 7, "alon": 7, "captur": [7, 10], "appli": 7, "transform": 7, "obtain": [7, 10], "talk": 7, "sigmoid": 7, "halv": 7, "a_l": 7, "sigma": 7, "assembl": 7, "organ": 7, "receiv": 7, "shown": 7, "nn": 7, "given": 7, "dark": 7, "matrix": 7, "modifi": 7, "train": 7, "loss": 7, "codomain": 7, "column": 7, "11": 7, "21": 7, "n1": 7, "12": 7, "22": 7, "n2": 7, "1m": 7, "2m": 7, "nm": 7, "bungu": 7, "pre": 7, "must": [7, 10], "transpos": 7, "seen": 7, "la_1": 7, "la_2": 7, "la_m": 7, "z_1": 7, "z_2": 7, "z_n": 7, "algebra": 7, "analysi": [7, 13], "times1": 7, "appear": 7, "box": 7, "somehow": 7, "picasso": 7, "plai": 7, "chess": 7, "better": 7, "magnu": 7, "carlsen": 7, "simpl": 7, "prompt": 7, "examin": [7, 10], "realiz": 7, "mathcal": 7, "rightarrow": 7, "learn": [7, 10], "subset": [7, 17], "pair": 7, "symbol": 7, "rightharpoonup": 7, "measur": 7, "discrep": [7, 10], "iter": 7, "argmin_w": 7, "old": 7, "alpha": 7, "nabla_w": 7, "eventu": 7, "decreas": 7, "zero": 7, "converg": 7, "equilibrium": 7, "stop": [7, 16], "machin": 7, "fall": 7, "epsilon": 7, "form": 7, "choos": 7, "good": 7, "somewher": 7, "bind": 7, "logist": 7, "monoton": 7, "Its": 7, "expens": 7, "calcul": [7, 12], "expon": 7, "suscept": 7, "vanish": 7, "known": 7, "horizont": 7, "asymptot": 7, "never": 7, "declar": 7, "exp": 7, "sigmap": 7, "bottom": 7, "ytick": 7, "25": 7, "25z": 7, "plot": 7, "remain": 7, "drawback": 7, "computation": 7, "backpropag": 7, "w_t": 7, "j": 7, "tanhmap": 7, "tanh": 7, "swish": 7, "swishmap": 7, "swishdoublemap": 7, "4": 7, "relu": 7, "55": 7, "leakyrelu": 7, "batch": 7, "descent": 7, "optim": 7, "newtonian": 7, "method": 7, "often": 7, "produc": 7, "wrong": 7, "pdftex": 7, "version": [7, 10, 12, 17], "141592653": 7, "40": 7, "live": 7, "2023": 7, "homebrew": 7, "preload": 7, "write18": 7, "enter": 7, "extend": [7, 10], "mode": [7, 10], "folder": 7, "x1": 7, "frlndvdd2158sbgrcspfnv_w0000gn": 7, "tmpoy95caej": [], "temp": 7, "latex2": 7, "2022": 7, "01": 7, "patch": 7, "l3": 7, "02": 7, "opt": 7, "cellar": 7, "texliv": 7, "20230313_2": 7, "texmf": 7, "dist": 7, "standalon": [7, 8], "cl": 7, "v1": 7, "3b": 7, "sub": 7, "stan": 7, "dalon": 7, "esc": 7, "sty": 7, "iftex": 7, "ifl": 7, "uatex": 7, "ift": 7, "ex": 7, "xkeyval": 7, "xke": 7, "yval": 7, "keyval": 7, "kvutil": 7, "k": 7, "eyval": 7, "cfg": 7, "articl": 7, "07": 7, "4n": 7, "standard": [1, 7, 8, 10], "size10": 7, "clo": 7, "varwidth": [7, 8], "va": 7, "rwidth": 7, "l3backend": 7, "3backend": 7, "aux": 7, "undefin": 7, "manual": 7, "companion": 7, "explan": 7, "type": [7, 12], "immedi": 7, "emerg": 7, "fatal": 7, "occur": 7, "pdf": [7, 8], "transcript": 7, "tmpoy95c": [], "aej": [], "get_ipython": 7, "run_cell_mag": 7, "ipython": [7, 8], "core": 7, "interactiveshel": 7, "2493": 7, "magic_nam": 7, "2491": 7, "builtin_trap": 7, "2492": 7, "magic_arg_": 7, "fn": 7, "kwarg": 7, "2495": 7, "prevent": 7, "2496": 7, "decor": 7, "output_can_be_silenc": 7, "2497": 7, "token": [7, 10], "2498": 7, "getattr": 7, "magic_output_can_be_silenc": 7, "jupytex": [7, 8], "52": 7, "pagenumb": [7, 8], "gobbl": [7, 8], "53": 7, "escap": 7, "tmpdir": 7, "tex_path": 7, "56": 7, "pdf_path": 7, "58": 7, "svg_path": 7, "526": 7, "capture_output": 7, "timeout": 7, "popenarg": 7, "524": 7, "retcod": 7, "poll": 7, "525": 7, "527": 7, "528": 7, "completedprocess": 7, "exit": 7, "forgot": 7, "tmprdas989x": 7, "am": 7, "math": 7, "inform": [7, 10, 13], "option": [1, 7], "gen": 7, "bsy": 7, "opn": 7, "font": 7, "dmap": 7, "warn": 7, "rerun": 7, "cross": 7, "type1": 7, "cm": 7, "cmbx10": 7, "pfb": 7, "di": 7, "cmbx7": 7, "202303": 7, "13_2": 7, "cmex10": 7, "cmmi1": 7, "lic": 7, "cmmi7": 7, "cmr10": 7, "202": 7, "30313_2": 7, "cmr7": 7, "cmsy": 7, "70394": 7, "byte": 7, "tmprdas9": 7, "89x": 7, "2020": 7, "06": 7, "copyright": 7, "2002": 7, "heiko": 7, "oberdiek": 7, "support": [7, 10], "nativ": 8, "mathjax": 8, "markdown": 8, "complex": [8, 10], "dynam": 8, "sacrif": 8, "beauti": 8, "coupl": 8, "pypi": 8, "modul": [7, 8], "afterward": 8, "pdf2svg": 8, "convert": [8, 10], "fast": 8, "upsid": 8, "javascript": 8, "lose": 8, "zoom": 8, "highlight": 8, "cursor": 8, "normal": 8, "png": 8, "jpeg": 8, "getting_start": 8, "chapter": [8, 13], "exampl": [8, 14, 17], "height": 8, "documentclass": 8, "turn": 8, "off": 8, "contin": 8, "debug": [8, 19], "jupyternotebook": 8, "jupyterlab": [8, 10, 17], "upload": [8, 19], "ruin": 8, "attach": 8, "scale": 8, "maximum": 8, "fair": 8, "trade": 8, "64": 12, "charact": 12, "hash": 12, "compar": [10, 12], "local": 12, "proc": 12, "prune": 12, "exec": 12, "stat": 12, "lc_all": 12, "sort": 12, "sha256sum": 12, "cut": 12, "travers": 12, "through": [12, 13], "exclud": 12, "permiss": [10, 12], "event": 12, "failur": 12, "pleas": 12, "latest": 12, "directrori": 12, "modif": 12, "been": 12, "workflow": [10, 13, 17, 19], "registri": 13, "final": 13, "parallel": 13, "runner": 13, "quai": 13, "io": 13, "trigger": [10, 13], "offici": 13, "successfulli": [10, 13], "benefit": 13, "go": 13, "detail": 13, "own": 13, "infrastructur": 13, "mach": 15, "frozen": [2, 17], "resolv": 17, "txt": [17, 19], "mamba": 17, "setup": [17, 19], "stage": [10, 17], "logic": 17, "version_check": 17, "mismatch": [10, 17], "cancel": 17, "myst": 17, "artifact": 19, "under": 19, "extract": 19, "tmpjymr51kr": [], "tmpjymr5": [], "1kr": [], "tmptlud1b0t": [], "tmptlud1": [], "b0t": [], "tmp9xo_y6m0": [], "tmp9xo_i": [], "6m0": [], "vqrt_6yx3f962pmw8c8mwxyw0000gn": [], "ipykernel_79547": [], "3757027472": [], "anaconda3": 7, "download": [], "py2": [], "py3": [], "whl": [], "kb": [], "modulenotfounderror": 7, "ipykernel_79555": [], "245863205": [], "run_line_mag": 7, "__init__": 7, "__version__": 7, "load_ipython_extens": 7, "cell_mag": 7, "line_cell_mag": 7, "pypdf2": 7, "pdfreader": 7, "tempfil": 7, "tmp9lgqkope": 7, "tmp9lgqk": 7, "primari": 10, "interfac": 10, "rigor": 10, "essenti": 10, "accuraci": 10, "reliabl": 10, "analyt": 10, "correctli": 10, "integr": 10, "seamlessli": 10, "variou": 10, "librari": 10, "addition": 10, "emploi": 10, "slideshow": 10, "enhanc": 10, "interact": 10, "present": 10, "wide": 10, "profession": 10, "analys": 10, "crucial": 10, "intend": 10, "effect": 10, "convei": 10, "overal": 10, "specif": [1, 10], "via": 10, "necessari": 10, "conda": 10, "convers": 10, "verif": 10, "smooth": 10, "stabil": 10, "assess": 10, "vital": 10, "avoid": 10, "potenti": 10, "aris": 10, "instabl": 10, "free": 10, "guarante": 10, "practic": 10, "seamless": 10, "experi": 10, "thorough": 10, "high": 10, "directli": 10, "jupyterlab_ris": 10, "depend": 10, "instanc": 10, "selenium": 10, "simul": 10, "retriev": 10, "launcher": 10, "launch": 10, "icon": 10, "comparison": 10, "proce": 10, "doubl": 10, "taken": 10, "fullscreen": 10, "search": 10, "three": 10, "ipykernel_79716": [], "zhangyiqin": [], "ipykernel_79724": [], "facilit": 0, "manag": 0, "varieti": 0, "cours": [0, 1], "creation": 0, "http": 0, "kevinge7": 0, "sever": 0, "usag": 1, "argument": 1, "descript": 1, "templat": 1, "project_nam": 1, "repo_url": 1, "url": 1, "book_nam": 1, "container_nam": 1, "course_nam": 1, "rebas": 1, "rest": 7, "magics_class": 7, "line_mag": 7, "keving": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"environment_test": 2, "write": 2, "permiss": 2, "home": 2, "directori": 2, "test": [2, 10, 13], "environment": 2, "variabl": 2, "network": 2, "pip": 2, "conda": 2, "git": 2, "ssh": 2, "enhanc": 3, "op": 3, "extens": [4, 6], "current": [4, 6, 8], "limit": [4, 6, 8], "futur": [4, 6], "direct": 4, "address": 4, "secur": 4, "scale": 4, "gradescope_autograd": 5, "architectur": [5, 13], "configur": 5, "exampl": [5, 7, 13], "run": [5, 7, 13], "getting_start": 7, "debug": 7, "fix": 7, "error": 7, "jupytexmag": 8, "how": [0, 8, 10], "doe": 8, "work": 8, "usag": 8, "miscellan": 9, "approv": 11, "checksum": 12, "container_test": 13, "overview": 13, "diagram": 13, "action": 13, "health": 14, "valiat": 14, "true": [14, 16, 17], "posit": [14, 16, 17], "image_vers": 15, "jupyter_notebook": 16, "valid": [16, 17], "package_vers": 17, "proper": 17, "neg": 17, "publish": 18, "size_and_tim": 19, "ui": 20, "rise": 10, "why": 10, "what": 10, "set": 10, "up": 10, "jupyt": 10, "lab": 10, "instal": [0, 10], "function": 10, "local": 10, "tool": [], "gener": 1, "new_project": 1, "new_book": 1, "new_contain": 1, "new_cours": 1, "updat": 1, "instruct": 1, "yuxi": [0, 1], "written": [0, 1], "ge": [0, 1]}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})