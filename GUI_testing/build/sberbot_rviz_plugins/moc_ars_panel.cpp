/****************************************************************************
** Meta object code from reading C++ file 'ars_panel.h'
**
** Created by: The Qt Meta Object Compiler version 67 (Qt 5.5.1)
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

#include "../../src/sberbot_rviz_plugins/src/ars_panel.h"
#include <QtCore/qbytearray.h>
#include <QtCore/qmetatype.h>
#if !defined(Q_MOC_OUTPUT_REVISION)
#error "The header file 'ars_panel.h' doesn't include <QObject>."
#elif Q_MOC_OUTPUT_REVISION != 67
#error "This file was generated using the moc from 5.5.1. It"
#error "cannot be used with the include files from this version of Qt."
#error "(The moc has changed too much.)"
#endif

QT_BEGIN_MOC_NAMESPACE
struct qt_meta_stringdata_sberbot_rviz_plugins__ArsPanel_t {
    QByteArrayData data[16];
    char stringdata0[199];
};
#define QT_MOC_LITERAL(idx, ofs, len) \
    Q_STATIC_BYTE_ARRAY_DATA_HEADER_INITIALIZER_WITH_OFFSET(len, \
    qptrdiff(offsetof(qt_meta_stringdata_sberbot_rviz_plugins__ArsPanel_t, stringdata0) + ofs \
        - idx * sizeof(QByteArrayData)) \
    )
static const qt_meta_stringdata_sberbot_rviz_plugins__ArsPanel_t qt_meta_stringdata_sberbot_rviz_plugins__ArsPanel = {
    {
QT_MOC_LITERAL(0, 0, 30), // "sberbot_rviz_plugins::ArsPanel"
QT_MOC_LITERAL(1, 31, 9), // "setLiftUp"
QT_MOC_LITERAL(2, 41, 0), // ""
QT_MOC_LITERAL(3, 42, 5), // "topic"
QT_MOC_LITERAL(4, 48, 11), // "setLiftDown"
QT_MOC_LITERAL(5, 60, 16), // "setSafetyDisable"
QT_MOC_LITERAL(6, 77, 7), // "setPath"
QT_MOC_LITERAL(7, 85, 12), // "updateLiftUp"
QT_MOC_LITERAL(8, 98, 14), // "updateLiftDown"
QT_MOC_LITERAL(9, 113, 19), // "updateSafetyDisable"
QT_MOC_LITERAL(10, 133, 10), // "updatePath"
QT_MOC_LITERAL(11, 144, 12), // "startToggled"
QT_MOC_LITERAL(12, 157, 4), // "trig"
QT_MOC_LITERAL(13, 162, 12), // "resetToggled"
QT_MOC_LITERAL(14, 175, 11), // "saveToggled"
QT_MOC_LITERAL(15, 187, 11) // "loadToggled"

    },
    "sberbot_rviz_plugins::ArsPanel\0setLiftUp\0"
    "\0topic\0setLiftDown\0setSafetyDisable\0"
    "setPath\0updateLiftUp\0updateLiftDown\0"
    "updateSafetyDisable\0updatePath\0"
    "startToggled\0trig\0resetToggled\0"
    "saveToggled\0loadToggled"
};
#undef QT_MOC_LITERAL

static const uint qt_meta_data_sberbot_rviz_plugins__ArsPanel[] = {

 // content:
       7,       // revision
       0,       // classname
       0,    0, // classinfo
      12,   14, // methods
       0,    0, // properties
       0,    0, // enums/sets
       0,    0, // constructors
       0,       // flags
       0,       // signalCount

 // slots: name, argc, parameters, tag, flags
       1,    1,   74,    2, 0x0a /* Public */,
       4,    1,   77,    2, 0x0a /* Public */,
       5,    1,   80,    2, 0x0a /* Public */,
       6,    1,   83,    2, 0x0a /* Public */,
       7,    0,   86,    2, 0x09 /* Protected */,
       8,    0,   87,    2, 0x09 /* Protected */,
       9,    0,   88,    2, 0x09 /* Protected */,
      10,    0,   89,    2, 0x09 /* Protected */,
      11,    1,   90,    2, 0x09 /* Protected */,
      13,    1,   93,    2, 0x09 /* Protected */,
      14,    1,   96,    2, 0x09 /* Protected */,
      15,    1,   99,    2, 0x09 /* Protected */,

 // slots: parameters
    QMetaType::Void, QMetaType::QString,    3,
    QMetaType::Void, QMetaType::QString,    3,
    QMetaType::Void, QMetaType::QString,    3,
    QMetaType::Void, QMetaType::QString,    3,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void,
    QMetaType::Void, QMetaType::Bool,   12,
    QMetaType::Void, QMetaType::Bool,   12,
    QMetaType::Void, QMetaType::Bool,   12,
    QMetaType::Void, QMetaType::Bool,   12,

       0        // eod
};

void sberbot_rviz_plugins::ArsPanel::qt_static_metacall(QObject *_o, QMetaObject::Call _c, int _id, void **_a)
{
    if (_c == QMetaObject::InvokeMetaMethod) {
        ArsPanel *_t = static_cast<ArsPanel *>(_o);
        Q_UNUSED(_t)
        switch (_id) {
        case 0: _t->setLiftUp((*reinterpret_cast< const QString(*)>(_a[1]))); break;
        case 1: _t->setLiftDown((*reinterpret_cast< const QString(*)>(_a[1]))); break;
        case 2: _t->setSafetyDisable((*reinterpret_cast< const QString(*)>(_a[1]))); break;
        case 3: _t->setPath((*reinterpret_cast< const QString(*)>(_a[1]))); break;
        case 4: _t->updateLiftUp(); break;
        case 5: _t->updateLiftDown(); break;
        case 6: _t->updateSafetyDisable(); break;
        case 7: _t->updatePath(); break;
        case 8: _t->startToggled((*reinterpret_cast< bool(*)>(_a[1]))); break;
        case 9: _t->resetToggled((*reinterpret_cast< bool(*)>(_a[1]))); break;
        case 10: _t->saveToggled((*reinterpret_cast< bool(*)>(_a[1]))); break;
        case 11: _t->loadToggled((*reinterpret_cast< bool(*)>(_a[1]))); break;
        default: ;
        }
    }
}

const QMetaObject sberbot_rviz_plugins::ArsPanel::staticMetaObject = {
    { &rviz::Panel::staticMetaObject, qt_meta_stringdata_sberbot_rviz_plugins__ArsPanel.data,
      qt_meta_data_sberbot_rviz_plugins__ArsPanel,  qt_static_metacall, Q_NULLPTR, Q_NULLPTR}
};


const QMetaObject *sberbot_rviz_plugins::ArsPanel::metaObject() const
{
    return QObject::d_ptr->metaObject ? QObject::d_ptr->dynamicMetaObject() : &staticMetaObject;
}

void *sberbot_rviz_plugins::ArsPanel::qt_metacast(const char *_clname)
{
    if (!_clname) return Q_NULLPTR;
    if (!strcmp(_clname, qt_meta_stringdata_sberbot_rviz_plugins__ArsPanel.stringdata0))
        return static_cast<void*>(const_cast< ArsPanel*>(this));
    return rviz::Panel::qt_metacast(_clname);
}

int sberbot_rviz_plugins::ArsPanel::qt_metacall(QMetaObject::Call _c, int _id, void **_a)
{
    _id = rviz::Panel::qt_metacall(_c, _id, _a);
    if (_id < 0)
        return _id;
    if (_c == QMetaObject::InvokeMetaMethod) {
        if (_id < 12)
            qt_static_metacall(this, _c, _id, _a);
        _id -= 12;
    } else if (_c == QMetaObject::RegisterMethodArgumentMetaType) {
        if (_id < 12)
            *reinterpret_cast<int*>(_a[0]) = -1;
        _id -= 12;
    }
    return _id;
}
QT_END_MOC_NAMESPACE
